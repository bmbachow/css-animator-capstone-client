import config from '../config'
import TokenService from '../services/token-service'

const AnimationApiService = {
    getAnimations() {
        return fetch(`${config.API_ENDPOINT}/animations`, {
             headers: {
             'authorization': `bearer ${TokenService.getAuthToken()}`,
           }, 
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAnimation(animationId) {
        return fetch(`${config.API_ENDPOINT}/animations/${animationId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,

            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    /* getThingReviews(thingId) {
        return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }, */
    postAnimation(animationId, content, title) {
        return fetch(`${config.API_ENDPOINT}/animations`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                animation_id: animationId,
                title,
                content,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateAnimation(id, title, content) {
        return fetch(`${config.API_ENDPOINT}/animationss/${id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id,
                title,
                content,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default AnimationApiService