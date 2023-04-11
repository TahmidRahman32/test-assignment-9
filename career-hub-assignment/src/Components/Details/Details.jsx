import React from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

const Details = () => {
   const details = useLoaderData();
   console.log(details)
   // const navigation = useNavigation();
   // if(navigation.state ==='loading'&& navigation.formData !=null){
   //   return console.log('loading') 
   // }
   // else{
   //    const { detailsId } = useParams();
   //    // console.log(details);
   //    const test = details?.find(detail => detail.id === detailsId)
   //    console.log("test",test)
   // }
   
   
// console.log(details)

   return (
      <div>
         <h2>Jod Details</h2>
         {/* {
         details.map(detail =>{
            const { Experiences, Educational, JobDescription, JobResponsibility, salary, address, phone, email ,} = detail;
            return <div>
               <div><h1>page</h1></div>
               <div></div>
            </div> 
         })
        } */}
      </div>
   );
};

export default Details;