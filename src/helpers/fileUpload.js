export const fileUpload = async(file)=>{
    const cloudUrl = 'http://api.cloudinary.com/v1_1/di2rpghps/upload';
    const formData = new FormData();
    formData.append('upload_preset','React-journal');
    formData.append('file', file);
    try{
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp= await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }
    catch(error){
        throw error;
    }
    //return url
}