import React from 'react'
import { Home } from './app/views/Home.js'
import { Contact } from './app/views/Contact.js'
import { StackNavigator } from 'react-navigation'
import { Video } from './app/views/Video.js'
import { VideoDetail } from './app/views/VideoDetail.js'
import { Registration } from './app/views/Registration.js'
import { Login } from './app/views/Login.js'
import { Quiz } from './app/views/Quiz.js'
import { Finish } from './app/views/QuizFinish.js'
import { Blog } from './app/views/Blog.js'

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
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  },
  BlogRT: {
    screen: Blog
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
