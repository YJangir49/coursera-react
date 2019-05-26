import * as ActionTypes from './ActionTypes' 
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl'; 

export const addComment =(comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload:comment
});

export const postComment=(dishId, rating, author, comment)=>(dispatch)=>{
     const newComment={
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
        newComment.date=new Date().toISOString();

        return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "same-origin"
        })
            .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error("ERROR" + response.status + ':' + response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            throw error;
        })
        .then(response=> response.json())
        .then(response=>dispatch(addComment(response)))
        .catch(error=>  { console.log('Post Comments', error.message); alert('Your comment could not be posted\nError: '+error.message);})
};

export const fetchDishes=()=>(dispatch)=>{

    dispatch(dishesLoading);
        
    return fetch(baseUrl + 'dishes')
            .then(response => {
                if (response.ok) {
                return response;
                } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
                }
            },
            error => {
                    var errmess = new Error(error.message);
                    throw errmess;
            })
            .then(response=>response.json())
            .then(dishes=>dispatch(addDishes(dishes)))
            .catch(error=>dispatch(dishesFailed(error)));

};

export const dishesLoading=()=>({
        type: ActionTypes.DISHES_LOADING
});

export const dishesFailed=(errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes=(dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response=>response.json())
        .then(promos=>dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error)));;

};

export const promosLoading=()=>({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed=(errmess)=>({
type: ActionTypes.PROMOS_FAILED,
payload: errmess
});

export const addPromos=(promos)=>({
type: ActionTypes.ADD_PROMOS,
payload: promos
});


export const fetchComments=()=>(dispatch)=>{

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
        .then(response=>response.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error)));;

};


export const commentsFailed=(errmess)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
};

export const leadersLoading=()=>({
    type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed=(errMess)=>({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

export const addLeaders=(leaders)=>({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})