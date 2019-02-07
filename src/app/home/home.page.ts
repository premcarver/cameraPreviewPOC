import { Component, OnInit } from '@angular/core';
// import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { NavController } from '@ionic/angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController, private cameraPreview: CameraPreview) {
    console.log("Prem is testing from homepage");

  }

  ngOnInit() {
    console.log("I'm alive!");
    this.callNav();
  }

  callNav() {
    this.navController.pop().then((res) => { console.log("Success while popping") }, (err) => { console.log("Error while popping") });
  }


  methodToCall() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });

    // // Set the handler to run every time we take a picture
    // this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
    //   console.log(result);
    //   // do something with the result
    // });


    // picture options
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }

    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      let picture = 'data:image/jpeg;base64,' + imageData;
      alert("Picture captued silently"+ picture)
      // Stop the camera preview
      this.cameraPreview.stopCamera();
    }, (err) => {
      console.log(err);
      alert("Error occured while taking picture:"+JSON.stringify(err))
    });
  }

}
