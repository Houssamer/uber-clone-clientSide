import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API } from "../../config/keys";
import SearchRow from '../../components/SearchRow/SearchRow';




const SearchScreen = () => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const navigation = useNavigation();


  function desti() {
    if (origin && destination)
    {
      navigation.navigate("DestinationScreen", {
        origin,
        destination,
      });
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.textInput}>
            <GooglePlacesAutocomplete 
                placeholder="Where from?"
                styles={{
                  textInput: styles.input,
                  container: {
                    position: "absolute",
                    width: "100%",
                    top: 55,
                  },
                  listView: {
                    
                  }
                }}
                fetchDetails
                onPress={(data, details) => {
                  setOrigin({data, details});
                }}
                query={{
                  key: GOOGLE_API,
                  language: 'fr',
                  components: 'country:ma'
                }}
                renderRow={(data) => <SearchRow data={data} />}
                numberOfLines={5}
            />
            <GooglePlacesAutocomplete 
                placeholder="Where to?"
                styles={{
                  textInput: styles.input,
                  container: {
                    position: "absolute",
                    width: "100%",
                  },
                  listView: {
                    position: "absolute",
                    top: 50
                  }
                }}
                onPress={(data, details) => setDestination({data, details})}
                fetchDetails
                query={{
                  key: GOOGLE_API,
                  language: 'fr',
                  components: 'country:ma'
                }}

                renderRow={(data) => <SearchRow data={data} />}
                numberOfLines={5}
            />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={desti}>
          <Text style={styles.button_text}>Next</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
