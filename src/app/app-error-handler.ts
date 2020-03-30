import { ErrorHandler } from "@angular/core";

// handle all unexpected exception
    
export class AppErrorHandler implements ErrorHandler{
        handleError(error){
            alert('An unexpected error occurred.');
            console.log(error);
        }
        
    }