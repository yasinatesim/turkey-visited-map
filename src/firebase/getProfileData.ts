import admin from './config'

export const getProfileData = async (username) => {
  const db = admin.firestore()
  const profileCollection = db.collection('cities').get()
  return (await profileCollection).docs.map((doc) => doc.data())
}