import { View, Text } from "react-native";
import axios from "axios";
import { useState } from "react";
import styles from "./styles";
import Title from "../../components/Title";
import { useEffect } from "react";
import { user } from "../../data/Profile";

export default function Users() {

  const [users, setUsers] = useState([]);
  
  const apiURL = process.env.EXPO_PUBLIC_API_URL;

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiURL}/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []); 

  console.log(users);

  return (
    
    <View style={styles.container}>
      <Title title="Users" />
      {user ? (
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
