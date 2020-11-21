//A bunch of API call to the server (all are async functions)
const AuthService = {
    login: function(userInfo) {
        return fetch("http://localhost:5000/login", 
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then(res => {
                if(res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return {isAuthenticated: false, user:{email:"", role:""}}
            })
        
    },

    register: function (userInfo) {
        return fetch("http://localhost:5000/register", 
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    logout: function() {
        return fetch("http://localhost:5000/logout", {credentials: 'include'})
                .then(res => res.json())
                .then(jsonData => jsonData)
    },

    isAuthenticated: function() {
        return fetch("http://localhost:5000/authenticated", {credentials: 'include'})
                .then(res => {
                    if(res.status !== 401)
                        return res.json().then(jsonData => jsonData)
                    else
                        return {isAuthenticated: false, user: {email:"", role:""}}
                })
    }
}

export default AuthService