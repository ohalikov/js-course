/*
    РЕализовать класс MyPromise,
    который будет работать точно также как и Promise
    Достаточно реализовать методы: then, catch, finally
*/


class MyPromise {
    constructor(callback) {
        this.onCatch = null
        this.onFinally = null
        this.thenCallbacks = []

        function resolver(data = '') { 
            this.thenCallbacks.forEach(callback_then => {
                data = callback_then(data)
            });

            if (this.onFinally) this.onFinally()
        }

        function rejecter(error) { 

            if (this.onCatch) this.onCatch()
            if (this.onFinally) this.onFinally()
        }
        
        callback(resolver.bind(this), rejecter.bind(this))
    }
    

    then(callback_function) {
        this.thenCallbacks.push(callback_function)
        return this
    }

    catch(callback_function) { 
        this.onCatch = callback_function
        return this
    }
    
    finally(callback_function) { 
        this.onFinally = callback_function 
        return this
    }
}

const promise = new MyPromise( (resolve_promise, reject_promise) => {
    setTimeout(() => {
        resolve_promise(2)
    }, 1500);
})

promise
    .then( num => num*=2)
    .catch( err => console.log(err))
    .then( num => num*=3)
    .finally( () => console.log('finally'))
    .then( num => console.log('Done!', num))
