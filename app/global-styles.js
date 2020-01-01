import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Arial', Helvetica, Arial, sans-serif;
    position: relative;
    /* overflow:hidden */
  }

  body.fontLoaded {
    font-family: Arial;
  }

  /* a:not([href]):not([tabindex]) {
    color: initial;
    text-decoration: none;
} */

  #app{
    height:inherit;
    .App{
      height:inherit
    }
    }

  img{
    height:inherit
  }

  p,
  label {
    font-family: Arial, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    margin:0
  }
  /*
        These is a styles for shown the card hover details
  */
  .Commuinty_Choice{
    .content{
      .hover{
        font-family: Arial;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.4);
        top: 0;
        width: 88.5%;
        height: 92.2%;
        color: #fff;
        display: flex;
        align-items: center;
        font-size:12px;
        padding:20px;
        opacity:0;
        &:hover{
          opacity:1;
          transition-property: opacity;
          transition-duration: 0.5s;
          transition-timing-function: ease-in-out;
        }
      }
    }
  }

  /*
    Model-global
  */
  .Model-global{
    box-shadow: 0 0 14px #000000;
    .modal-header{
      border-bottom:0;
      padding-bottom: 0;
      .modal-title{
          color:#4D4D4D;
          font-size: 18px;
      }
    }
    .modal-body{
      .title{
        margin-bottom: 12px;
      }
      .description{
        margin-bottom: 22px;
        p{
          font-size:16px;
          font-family:Arial
        }
      }
      .form{
        .Name{
          margin-bottom: 12px;
          .title{
            margin-bottom: 8px;
            color:#4D4D4D;
          }
          .input{
            .form-control{
              border:1px solid #478AF2;
              &:focus{
                box-shadow:unset
              }
            }
          }
        }
        .email{
          color:#4D4D4D;
          margin-bottom: 12px;
          .title{
            margin-bottom: 8px;
          }
          .input{
            .form-control{
              border:1px solid #478AF2;
              &:focus{
                box-shadow:unset
              }
            }
          }
        }
      }
    }
    .modal-footer{
      border-top:0;
      padding-top: 0;
      padding-bottom: 24px;
      button{
        width: 65%;
        margin: auto;
        padding: 16px;
        border-radius: 50px;
        font-size: 21px;
        &:focus{
          box-shadow: unset
        }
      }
    }
  }
}
  h2{
    margin:0
  }

  .text-center{
    text-align:center;
  }
  .ParentCounter div div{
      padding: 0 !important;
  }
  /* .ParentCounter .text-center div div:last-child{
    padding:10px !important
  } */
  .ParentCounter .text-center div{
    justify-content:center;
    /* border: 1px solid #aaa; */
    border-radius: 5px;
    border: 1px solid #aaa;
    margin: 0 10px;
  }
  .ParentCounter .addborder div *{
    border-color:transparent
  }
  /*
        These is a styles for active button
  */
  .active_Button{
    background-color: #478af2 !important;
    border: 1px solid #478af2 !important;
    color: #fff;
  }
  /*
        These is a styles for remove the outline color from the  button
  */
  button:focus{
    outline:0
  }
  /*
        These is a styles for customize the dropdown styles
  */
  .Details_Tshirt{
    .dropdown{
      .Details-Tshirt_type{
        margin-right:16px;
      }
      button{
        border:1px solid #ADADAD !important;
        color:#000 !important;
        background-color:transparent !important;
        padding: 6px 12px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:focus{
          box-shadow:unset !important
        }
      }
      .dropdown-menu.show{
        width:100%
      }
      .dropdown-toggle::after{
        transform: rotate(271deg);
        position: absolute;
        right: 12px;
      }
    }
  }
  /*
        These is a styles for adding a wrapper for the layout
  */
  .container_HomePage{
    width: 68.5%;
    margin:auto
  }
  /*
        These is a styles for adding the design button red styles
  */
  .container_HomePage{
    .ChooseTshirt{
      .DesignButton{
        button{
          width: 50%;
          padding: 20px;
          border-radius: 35px;
          font-size: 20px;
          font-family: Arial;
          background-color: #FF3729;
          border-color: #FF3729;
        }
      }
    }
  }
  /*
      these for upload input type file
  */
  .UploadArt{
    .file-input{
      position: relative;
      border: 1px solid #eee;
      height: 49px;
      border-radius: 10px;
      z-index: 1;
      input[type="file"]{
        opacity:0;
        height: 100%;
      }
      label{
        position: absolute;
        right: 0;
        background-color: #478AF2;
        color: #fff;
        padding: 12px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
      }
    }
  }
  /*
        These is a styles for making the footer layout
  */
  .footer{
    .container_HomePage{
      .list-items{
        padding-top:6%;
        .list{
          ul{
            list-style:none;
            padding: 0;
            .title{
              font-size:14px;
              color: #000;
              margin-bottom:14px;
            }
            li{
              margin-bottom: 6px;
              a{
                font-size: 12px;
                color: #969595;
                font-family: Arial;
                font-weight: 100;
                text-transform:capitalize;
                text-decoration:none
              }
            }
          }
        }
        .Newsletter{
          position: relative;
          .form-control{
            font-size: 12px;
            color: #C1C1C1;
            height:35px;
            border-color:#C1C1C1;
            &:focus{
              box-shadow:unset
            }
          }
          .Sendicon{
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
            position: absolute;
            right: 0;
            top: 0;
            background-color: #000;
            padding: 5px 12px;
          }
        }
        .icons{
            ul{
              padding-left:0;
              list-style:none;
              display: flex;
              margin: 12px 0 0 0;
              justify-content: space-between;
          }
        }
      }
    }
    hr{
      border-color:#f1f1f1
    }
    .BottomList{
      margin-bottom:16px;
      .list{
        ul{
          list-style:none;
          padding:0;
          margin:0;
          justify-content: space-between;
          li{
            margin:0;
            a{
              font-family: Arial;
              font-size:16px;
              color:#000;
              text-decoration:none;
              margin-right: 24px;
            }
          }
        }
      }
      p{
        color:#C1C1C1;
        font-size:14px;
      }
    }
  }
`;

export default GlobalStyle;
