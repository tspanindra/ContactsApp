# This project is a RN version of the Contacts app here. https://bitbucket.org/meghaKrish/contactsapp

This was create as an exercise and also to compare with Android and limitations of RN and create-react-native-app.
# This uses create-react-native-app syntax to create a pure JS solution.

# There are potential differences between the android app.
  1) Not able to access Image (since camera is not accessible in pure JS.)
  2) Not able to use Toast in IOS (As i couldn't use other modules (since this has no IOS files/project)).
  3) Not able to quit the application (Needs native support).
  4) Also DatePickerIOS isnt working smooth (Have to revisit).

  # Next project to compliment these limitaions.
  1) will use react-native init to creat project which should have IOS/Android core API functionality.
  2) Wil try to use/set image using react-native-camera.
  3) use Toast and IOS exit app.
  4) Will use asyncStorage for contact persistance.

  # usage.
  `git clone https://github.com/tspanindra/RNContactsApp.git`

  `cd RnContactsApp && npm i or yarn`

  `yarn android\ yarn ios`

  #screenshots
  
