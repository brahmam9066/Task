import React from 'react'
import { useContext } from "react";
import { PostsData } from "../context/globalContext";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const Posts = () => {
    const { searchQuery, searched, posts } = useContext(PostsData)

    const randomNumber = () => {
        return Math.floor(100000 + Math.random() * 900000);
    }
    return (
        <>
            {
                searchQuery.length > 0 ?
                    searched.map((search, key) => {
                        return (
                            <View key={key}>
                                <Text key={search.id}>{search.id}:{search.body}-{randomNumber()}</Text>
                            </View>
                        )
                    })
                    :
                    posts.map((post, key) => {
                        return (
                            <View key={key}>
                                <Text >{post.id}:{post.body}-{Math.random()}</Text>
                            </View>
                        )
                    })
            }
        </>
    )
}