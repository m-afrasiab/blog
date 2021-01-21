'use strict'

const app = {
  initialize() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false,
    )
  },

  onDeviceReady() {
    this.receivedEvent('deviceready')

    this.showAds()
    this.checkIsLoaded()
    this.showAdsOld()
  },

  checkIsLoaded() {
    return admob.interstitial.isLoaded().then(result => {
      console.log(result)
      return result
    })
  },

  showAds() {
    
    const banner = new admob.BannerAd({
      adUnitId: 'ca-app-pub-5517499679401400/9842406242',
    })
    banner.show({ position: 'bottom' })
  },

  showAdsOld() {
   
    admob.interstitial
      .load({ id: 'ca-app-pub-5517499679401400/3866534140' })
      .then(() => admob.interstitial.show())
      .catch(console.log)
    
  },

  receivedEvent(id) {
    const parentElement = document.getElementById(id)
   

    console.log(`Received Event: ${id}`)
  },
}

app.initialize()
