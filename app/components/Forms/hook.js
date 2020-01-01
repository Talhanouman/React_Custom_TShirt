import { useEffect, useReducer } from 'react';
import { emailRegex } from './utils';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'setValidationRules': {
      return {
        ...state,
        validationRules: {
          ...state.validationRules,
          ...action.payload,
        },
      };
    }
    case 'update': {
      return {
        ...state,
        values: {
          ...state.values,
          ...(action.payload.values ? action.payload.values : {}),
        },
        errors: {
          ...state.errors,
          ...action.payload.errors,
        },
      };
    }
    case 'setConfig': {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    errors: {},
    values: {},
    validationRules: {},
    config: {},
  });

  const getValues = () => state.values;

  const isValid = () => {
    if (Object.keys(state.values).length === 0) {
      return false;
    }
    return validateForm(state, dispatch);
  };

  return {
    values: state.values,
    errors: state.errors,
    isValid,
    getValues,
    dispatch,
  };
};

export const useInput = ({ validation, defaultValue, ...config }, form) => {
  useEffect(() => {
    form.dispatch({
      type: 'setValidationRules',
      payload: { [config.name]: validation },
    });
    form.dispatch({
      type: 'setConfig',
      payload: { [config.name]: config },
    });
  }, [config.validation]);

  const errors = form.errors[config.name] ? form.errors[config.name] : [];

  const value = form.values[config.name] ? form.values[config.name] : '';

  useEffect(() => {
    form.dispatch({
      type: 'update',
      payload: {
        values: {
          [config.name]: defaultValue ? defaultValue : value,
        },
        errors: {
          [config.name]: errors,
        },
      },
    });
  }, [config.name, defaultValue]);

  const valueSetter = e => {
    let value;
    if (e.target !== undefined) {
      value = e.target.value;
    } else {
      value = e;
    }

    form.dispatch({
      type: 'update',
      payload: {
        values: {
          [config.name]: value,
          value,
        },
        errors: {
          [config.name]: [],
        },
      },
    });
  };

  const validateField = e => {
    const state = {
      values: form.values,
      errors: form.errors,
    };
    const newErrors = [];
    if (validation !== undefined) {
      Object.keys(validation).forEach(key => {
        // value, test, key, state
        const validationConfig = {
          value,
          test: validation[key],
          key,
          state,
          displayName: config.placeholder,
        };

        const err = handleValidation(validationConfig);
        if (err) {
          newErrors.push(err);
        }
      });
    }
    form.dispatch({
      type: 'update',
      payload: {
        values: {
          [config.name]: value,
        },
        errors: {
          [config.name]: newErrors,
        },
      },
    });
  };

  return {
    ...config,
    errors,
    onChange: valueSetter,
    onBlur: validateField,
    value,
  };
};

const validateForm = (state, dispatch) => {
  const { values, validationRules, config } = state;
  let isValid = true;
  Object.entries(values).forEach(([name, value]) => {
    const valueErrors = [];
    Object.entries(validationRules[name]).forEach(([key, test]) => {
      const validationConfig = {
        value,
        test,
        key,
        state,
        displayName: config[name].placeholder,
      };
      const validatorResponse = handleValidation(validationConfig);
      if (validatorResponse !== undefined) {
        valueErrors.push(validatorResponse);
        isValid = false;
      }
    });
    dispatch({
      type: 'update',
      payload: {
        values: {
          [name]: value,
        },
        errors: {
          [name]: valueErrors,
        },
      },
    });
  });
  return isValid;
};

const handleValidation = ({ value, test, key, state, displayName }) => {
  switch (key) {
    case 'maxLength': {
      if (value.length > test) {
        return `Maximum length for this input is ${test}`;
      }
      break;
    }
    case 'minLength': {
      if (value.length > 0 && value.length < test) {
        return `Minimum length for this input is ${test}`;
      }
      break;
    }
    case 'required': {
      if (test === true && value.length < 1) {
        return `${displayName} is required`;
      }
      break;
    }
    case 'email': {
      if (test === true && value.length > 0 && !emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
      break;
    }
    case 'customValidator': {
      return test(value, state);
    }
    default: {
      return undefined;
    }
  }
  return undefined;
};
