export const fetchConToken = ( data, method = 'GET') => {
        
    const url = `http://localhost:5000/api/auth/renew`;
    const token = localStorage.getItem('token') || '';
    
    
        if(method === 'GET'){
            return fetch(url, {method,headers:{'x-token':token}});
        }else{
            return fetch(url, {
                method: method,
                
                headers: {
                    'Content-Type': 'application/json',
                    'x-token':token
                },
                body: JSON.stringify(data)
            });
        }
  };