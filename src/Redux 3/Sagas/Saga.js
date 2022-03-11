import axios from 'axios'
import {takeEvery , put, delay} from 'redux-saga/effects'

function fetchTheUser (id){
    return axios.get('https://jsonplaceholder.typicode.com/todos/'+id)

}

// function* ageUpAsync(i) {      //0 sec
//    const todoData = yield fetchUser(1)
//    console.log(todoData);
//    yield delay(5000)           //2 sec
//    yield put( { type : 'AGE_UP_ASYNC' , payload : 1})
// }

function* ageUpAsync() {               // 0 sec        
    const todoData = yield fetchTheUser(5)
    console.log(todoData.data);
    yield put( { type: "AGE_UP_ASYNC", payload: todoData.data.id  } )
}

export function* watchAgeUp() {
    yield takeEvery('AGE_UP',ageUpAsync)
}