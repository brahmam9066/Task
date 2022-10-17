import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { PostsData } from '../context/globalContext';
import { Posts } from './posts';

export const SearchInput = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearch] = useState("");
    const [searched, setSearched] = useState([])
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => {
                let temp = [].concat(...Array(30).fill(json));
                setPosts(temp.flat(1));
            }
            )
    }
    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        if (searchQuery) {
            setSearched(posts.filter((post) => {
                return Object.values(post.body).join('').toLowerCase().includes(searchQuery.toLowerCase())
            })
            );
        }
        else {
            setPosts(posts);
        }
    }, [searchQuery])
    return (
        <PostsData.Provider value={{ searchQuery, searched, posts }}>
            <View style={{}}>
                <View style={{
                    height: 20,
                    margin: 12,
                    borderWidth: 1,
                    // padding: 5,
                    // borderRadius: 5
                }}>
                    <TextInput style={{}} placeholder="Search a text" onChangeText={value => setSearch(value)}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: "#cfd2d4", margin: 20, width: 100 }}
                        onPress={getData}
                    >
                        <View style={{ width: 260 }}>
                            <Text style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>Re-render</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Posts />

            </View >
        </PostsData.Provider>

    )
}

