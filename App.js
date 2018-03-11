import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
import Card from 'react-native-swiping-cards';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      images: [
        'https://www.telegraph.co.uk/content/dam/motoring2/2015/12/01/1-BMW-i8-main-xlarge-xlarge_trans_NvBQzQNjv4BqrWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
        'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Public%20Pool/Teaser%20Pool/Large%20Teaser/M760li-1680x756.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1514354693992.jpg',
        'https://www.bmw.ca/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/at-a-glance/BMW-4-series-gran-coupe-at-a-glance-ts-desktop.jpg',
        'https://www.bmw.am/content/dam/bmw/common/all-models/2-series/coupe/2017/teaser/BMW-2series-coupe-ataglance-hometeaser.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1493973579634.jpg',
        'https://www.bmw.am/content/dam/bmw/common/all-models/2-series/coupe/2017/teaser/BMW-2series-coupe-ataglance-hometeaser.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1493973579634.jpg',
      ],
      index:0,
    }
  }

renderItems(){
  let currentImage = this.state.images[this.state.index];
    return this.state.images.map((card,index)=>{
      return(
        <Card
             key = {`${index}card`}
             onSwipeRight={this.handleRelease.bind(this)}
             onSwipeLeft={this.handleRelease.bind(this)}
             onSwipeCenter={this.handleRelease.bind(this)}
             onRelease={() => true}
             onRightAnimationEnd={() => true}
             onLeftAnimationEnd={() => true}
             onCenterAnimationEnd={() => true}
             onReleaseAnimationEnd={() => true}
        >
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
             <Image
               style={{width: 300, height: 300}}
               source={{uri: currentImage}}
             />
           </View>
        </Card>
      )
    })
}

 handleRelease(){
   let rand = Math.floor(Math.random()*4 + 1);
    if(rand === this.state.index){
      let rand = Math.floor(Math.random()*4 + 1);
      this.setState({
        index: rand,
      });
    }else{
      let rand = Math.floor(Math.random()*4 + 1);
      this.setState({
        index: rand,
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {this.renderItems()}
      </View>
    );
  }
}
