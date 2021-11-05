import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import AppHeader from "../../components/AppHeader";
import ZerbysFormField from "../../components/ZerbysFormField";
import ZerbysFormList from "../../components/ZerbysFormList";
import useProfile, { FIELDS } from "../../js/screens/useProfile";

function ProfileScreen({ labels, onFieldChanged, onFormSubmit, user, errors,  }) {
  return (
    <View style={{flex:1}}>
      <AppHeader />
      <ZerbysFormList labels={labels} Component={TextInput} onFieldChanged={onFieldChanged} 
        fieldList={[FIELDS.fullname,FIELDS.email, FIELDS.username]} data={user} errors={errors}/>
        <ZerbysFormList labels={labels} Component={TextInput} onFieldChanged={onFieldChanged} 
        fieldList={[FIELDS.phone]} data={user} errors={errors} keyboardType={'numeric'}/>
        
        <ZerbysFormList labels={labels} Component={TextInput} onFieldChanged={onFieldChanged} 
        fieldList={[FIELDS.password,FIELDS.repassword]} data={user} errors={errors} 
        secureTextEntry={true}/>
      <View style={{ flexDirection: "row", flex:1 }}>
        <Button onPress={onFormSubmit} style={{flex:1}}>Cancel</Button>
        <Button onPress={onFormSubmit} style={{flex:1}}>Submit</Button>
      </View>
    </View>
  );
}

export default function () {
  const propsProfile = useProfile();

  return <ProfileScreen {...propsProfile} />
};
