import * as React from 'react';
import Cropper from 'cropperjs';
import { Button, Typography }from '@material-ui/core/';

import  '../../../../node_modules/cropperjs/dist/cropper.min.css';
import * as AvatarCropperComponent from './constants';
import * as defaultAvatar from '../../../../src/assets/img/defaultAvatar.png';
import blur from './AvatarBlur';

interface State {
  isLoading: boolean;
  isCropping: boolean;
  baseImage: any;
  showError: boolean;
}

interface Props {
  originalImage?: string;
  imageChanged?(avatar: string): void;
}

type PropsWithStyles = Props;

/**
 * Crops an image file
 */
class AvatarCropper extends React.Component<PropsWithStyles, State> {
  cropperInstance: any;
  imageHolder: any;
  fileUpload: any;

  constructor(props: PropsWithStyles) {
    super(props);

    this.state = {
      isLoading: false,
      isCropping: false,
      showError: false,
      baseImage:  props.originalImage || defaultAvatar,
    };
  }

  validateFile(image: any) {
    var fileExtension = image.type.split('/').pop().toLowerCase();
    var isValidFile = false;

    for (var index in AvatarCropperComponent.allowedExtension) {

    if (fileExtension === AvatarCropperComponent.allowedExtension[index]) {
      isValidFile = true;
      break;
      }
    }
    return isValidFile;
  }

  onFileChange = (e: any) => {
    let imageMaxSize = AvatarCropperComponent.maxImageSize;
    let picFiles: any = e.target.files;
    let onePic: any = picFiles[0];

    if (FileReader && picFiles && picFiles.length) {
      if (onePic.size > imageMaxSize || !this.validateFile(onePic)) {
        this.setState({
          showError: true,
          baseImage: defaultAvatar
        });
      } else {
        let fr = new FileReader();
        fr.onload =  () => {
          this.setState({isCropping: true, baseImage: fr.result});
        };
        fr.readAsDataURL(onePic);
      }
    }
  }

  componentDidUpdate() {
    if (this.state.isCropping) {
      this.cropperInstance = new Cropper(
        this.imageHolder,
        {
          aspectRatio: 1,
          minContainerHeight: 150,
          minContainerWidth: 150,
          modal: false,
          viewMode: 1,
          minCropBoxWidth: 150,
          background: false,
        }
      );

      this.imageHolder.addEventListener('ready', (e: any) => {
        let crpCont = document.getElementsByClassName('cropper-container')[0];
        let crpBgd = this.imageToDataUri(this.state.baseImage, 150, 150);
        crpCont.setAttribute(
          'style',
          'min-width:150px;'
          + ' min-height:150px;background-size: cover; background-image: url(\''
          + crpBgd + '\')');
      });
    }
  }

  imageOnClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  }

  handleCrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    let newBase64 = this.cropperInstance.getCroppedCanvas(
      {
        minWidth: 150,
        maxWidth: 300,
        fillColor: '#ffffff',
        imageSmoothingQuality: 'high'
      }
    ).toDataURL();
    if (newBase64) {
      this.cropperInstance.clear();
      this.cropperInstance.destroy();
      this.cropperInstance = null;
      this.setState({isCropping: false, baseImage: newBase64});
      if (this.props.imageChanged) {
        this.props.imageChanged(newBase64);
      }
    }
    // Get new ImageCropped value;
  }

  imageToDataUri(img: string, width: number, height: number): string {
    let canvas = document.createElement('canvas');
    let ctx: any = canvas.getContext('2d');
    let imgObj = document.createElement('img');
    imgObj.src = img;
    canvas.width = width;
    canvas.height = height;
    if (ctx) {
      ctx.drawImage(imgObj, 0, 0, width, height);
      let imageData = ctx.getImageData(0, 0, width, height);
      ctx.putImageData(blur(imageData, { amount: 2} ), 0, 0);
    }

    // encode image to data-uri with base64 version of compressed image
    return canvas.toDataURL();
  }

  render() {
    const currentLogo = this.state.baseImage;
    // const handleClose = () => this.setState({ showError: false});

    let actions;
    if (this.state.isCropping) {
      actions = (
        <Button
          color="primary"
          onClick={this.handleCrop}
          variant="contained"
        >
          {AvatarCropperComponent.changePhotoButtonText}
        </Button>
      );
    }
    const imgStyle = (!this.state.isCropping) ? {
      width: '140px',
      height: '140px',
      maxWidth: '100%',
      borderRadius: '50%',
    } : { maxWidth: '100%'};

    return (
      <div>
        <input
          className="display-none"
          id={AvatarCropperComponent.inputId}
          type="file"
          accept="image/*"
          onChange={this.onFileChange}
          ref={(e) => { this.fileUpload = e; }}
          disabled={this.state.isCropping}
        />
        <label className="cursor-pointer text-center" htmlFor={AvatarCropperComponent.inputId}>
          <img ref={(e) => { this.imageHolder = e; }} src={currentLogo} style={imgStyle} alt="avatar"/>
        </label>
				{!this.state.isCropping &&
				 <Typography color="primary" className="text-align-center">
					 Cambia tu foto de perfil
				 </Typography>
				}
        {actions}
      </div>
    );
  }
}

export default AvatarCropper;

