import React from 'react'
import { Home } from './app/views/Home.js'
import { Contact } from './app/views/Contact.js'
import { StackNavigator } from 'react-navigation'
import { Video } from './app/views/Video.js'
import { VideoDetail } from './app/views/VideoDetail.js'
import { Registration } from './app/views/Registration.js'


const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegistrationRT: {
    screen: Registration
  }
}, 
  {
  initialRouteName: 'HomeRT'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    )
  }
}
