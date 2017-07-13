import React, { Component } from 'react';
import firebase, { firebaseApp} from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import { Image, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { userProfileCreate, userProfileUpdate, userProfileFetch, addGenre } from '../actions';
import { Container, Content, Header, Footer, FooterTab, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from './common';

class UserInfoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      phone: this.props.phone,
      bio: this.props.bio,
      location: this.props.location,
      avatarSource: this.props.avatarSource,
      uploadURL: this.props.uploadURL || null,
      genreArray: this.props.genreArray || [],
      instrumentArray: this.props.instrumentArray || []
    };

    console.log('state', this.state);


  }
  // componentWillMount() {
  //   this.props.userProfileFetch();
  // }
  componentWillReceiveProps(nextProps) {
    console.log('NextProps', nextProps);

  }
  uploadPic(){

    const options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });


      }
    });
  }
  addInstrument(instrument){
    console.log('inst', instrument);
  }
  addGenre(genre){
    console.log('clicked', genre);
    this.state.genreArray.push(genre);
    this.props.addGenre({ prop: 'genreArray', value: genre});
    console.log('i hope this works', this.state.genreArray);

  }
  onButtonPress() {
    // const { name, phone, bio } = this.props;
    // this.props.userProfileUpdate({ prop: 'name', value: this.state.name });
    console.log('state here', this.state);

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    const storage = firebase.storage();
    const { currentUser } = firebase.auth();

    // Might want to change this back to a sessionId, but this may work to override for a new photo

    const uploadImage = (uri, mime = 'application/octet-stream') => {
      console.log('uri', uri);

      //////Add some UI state to throw a spinner while uploading avatar


      return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
          // const sessionId = new Date().getTime()
          let uploadBlob = null;
          const imageRef = storage.ref('images').child(`${currentUser.uid}`);

          fs.readFile(uploadUri, 'base64')
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
            uploadBlob = blob;
            return imageRef.put(blob, { contentType: mime });
          })
          .then(() => {
            uploadBlob.close()
            return imageRef.getDownloadURL()
          })
          .then((url) => {
            resolve(url)
          })
          .catch((error) => {
            reject(error)
          })
      })
    };

    if (this.state.avatarSource) {
      uploadImage(this.state.avatarSource.uri)
          .then(url => this.setState({ uploadURL: url }))
          .then(() => this.props.userProfileCreate(this.state))
          .catch(error => console.log(error));
    }else {
      this.props.userProfileCreate(this.state);
    }

  }
  render() {

    console.log('props', this.state);
    return (
      <Container>
        <Content>
          <Card>

            <CardItem header>
              <Text>Profile Info:</Text>
            </CardItem>

              <Form>
                <CardItem style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  { this.state.uploadURL !== '' ?
                    <Image style={{ height: 150, width: 150, borderRadius: 75}} source={{ uri: this.props.uploadURL}} /> :
                    <Thumbnail round large size={200} source={{ uri: this.state.avatarSource}} />
                  }
                </CardItem>


                <Button onPress={this.uploadPic.bind(this)}>
                  <Text>Upload new photo?</Text>
                </Button>

                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Number</Label>
                  <Input
                    value={this.state.phone}
                    onChangeText={(text) => this.setState({ phone: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Zip Code</Label>
                  <Input
                    value={this.state.location}
                    onChangeText={(text) => this.setState({ location: text })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Tell us about yourself...</Label>
                  <Input
                    value={this.state.bio}
                    onChangeText={(text) => this.setState({ bio: text })}
                  />
                </Item>


                <Button onPress={this.onButtonPress.bind(this)} >
                  <Text>Save</Text>
                </Button>
              </Form>
            </Card>

            <Card>
              <CardItem>
                <Text style={styles.paragraphText}>What instruments do you play?</Text>
              </CardItem>
            </Card>

            <ScrollView horizontal>
              <Button onPress={() => this.addInstrument('guitar')}>
                <Text>Guitar</Text>
              </Button>
              <Button onPress={() => this.addInstrument('bass')}>
                <Text>Bass</Text>
              </Button>
              <Button onPress={() => this.addInstrument('drums')}>
                <Text>Drums</Text>
              </Button>
              <Button onPress={() => this.addInstrument('vox')}>
                <Text>Vocals</Text>
              </Button>
              <Button onPress={() => this.addInstrument('keys')}>
                <Text>Keys</Text>
              </Button>

              <Button onPress={() => this.addInstrument('violin')}>
                <Text>Violin</Text>
              </Button>
              <Button onPress={() => this.addInstrument('cello')}>
                <Text>Cello</Text>
              </Button>
              <Button onPress={() => this.addInstrument('sax')}>
                <Text>Saxohpone</Text>
              </Button>
              <Button onPress={() => this.addInstrument('trumpet')}>
                <Text>Trumpet</Text>
              </Button>
              <Button onPress={() => this.addInstrument('else')}>
                <Text>Something else?</Text>
              </Button>
            </ScrollView>

            <Card>
              <CardItem>
                <Text style={styles.paragraphText}>What types of music do you play?</Text>
              </CardItem>
            </Card>

            <Grid>
              <Col>
                <Button onPress={() => this.addGenre('rock')}>
                  <Text>Rock</Text>
                </Button>

                <Button value="pop" onPress={() => this.addGenre('pop')}>
                  <Text>Pop</Text>
                </Button>
                <Button value="country" onPress={() => this.addGenre('country')}>
                  <Text>Country</Text>
                </Button>
                <Button value="ambient" onPress={() => this.addGenre('ambient')}>
                  <Text>Ambient</Text>
                </Button>
                <Button value="bluegrass" onPress={() => this.addGenre('bluegrass')}>
                  <Text>Bluegrass</Text>
                </Button>
              </Col>

              <Col>
                <Button value="rb" onPress={() => this.addGenre('rb')}>
                  <Text>R&B</Text>
                </Button>
                <Button value="motown" onPress={() => this.addGenre('motown')}>
                  <Text>Motown</Text>
                </Button>
                <Button value="jazz" onPress={() => this.addGenre('jazz')}>
                  <Text>Jazz</Text>
                </Button>
                <Button value="dance" onPress={() => this.addGenre('dance')}>
                  <Text>Dance</Text>
                </Button>
                <Button value="hiphop" onPress={() => this.addGenre('hip-hop')}>
                  <Text>Hip-Hop</Text>
                </Button>
              </Col>
            </Grid>

        </Content>
      </Container>
    );
  }
}

const styles = {
  paragraphText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    marginLeft: 10
  }
};

const mapStateToProps = (state) => {
  const { name, phone, bio, uploadURL, location, genreArray, instrumentArray } = state.profileInfo;

  return { name, phone, bio, uploadURL, location, genreArray, instrumentArray };
};

export default connect(mapStateToProps, { userProfileCreate, userProfileUpdate, userProfileFetch, addGenre })(UserInfoForm);
