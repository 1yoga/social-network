import {render, screen} from "@testing-library/react";
import App from "../App";
import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("Привет!")
    let state = {
        posts: [
            {id: 1, message: "Мой первый пост", likesCount: 12},
            {id: 2, message: "Как дела?", likesCount: 0}
        ],
    };
    //2.action
    let newState = profileReducer(state, action)
    //3. expectation

    expect( newState.posts.length).toBe(3)

});

