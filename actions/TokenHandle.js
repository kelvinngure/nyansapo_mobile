import  AsyncStorage  from "@react-native-community/async-storage"; //make sure not to wrap the import in curly braces since you've directly accessed the object

 const getToken = async() => {
      //console.log("getting token")
      try{ 
        const x = await AsyncStorage.getItem('token')
        return x
      }  catch(e){
        console.log("getting token error")
      }
  };

  const deleteToken = async () => {
    try {
      console.log("deleting token")
        const value = await AsyncStorage.removeItem("token");
        console.log("deleted token and user")
    } catch (error) {
      console.log(`Deleting error`)
    }
  };

  ///// FOR REFRESH TOKEN
  const storeRefreshToken = async (token) => {
    try {
      console.log("storing token")
      await AsyncStorage.setItem('token', token)
    } catch (error) {
      console.log(`Storing refreshtoken error`)
    }
  };

export { getToken, deleteToken, storeRefreshToken}

  