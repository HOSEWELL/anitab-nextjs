export async function POST(request: Request) {
    const baseUrl = process.env.BASE_URL;
    console.log({baseUrl});
    
    const body = await request.json();
    const {username,password}= body

    if(!username && !password){
        return new Response("Username and password missing",{
            status:400,
        });
    }
   try{    
    const response = await fetch(`${baseUrl}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body),
    })
    const data = await response.json();
    return new Response(JSON.stringify(data),{
        status:200,
    });
   }catch(error){
    return new Response((error as Error).message,{
        status:500,
    });
   }
}