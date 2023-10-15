"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface SettingsModalProps{
    isOpen?: boolean;
    onClose: ()=> void;
    currentUser: User;

}

const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen, onClose, currentUser
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register, handleSubmit, setValue, watch , formState:{errors}
    } = useForm<FieldValues>({
        defaultValues:{
            name: currentUser?.name,
            image: currentUser?.image
        }
    });

    const image = watch('image');

    const handleUpload = (result: any)=>{
        setValue('image' , result?.info?.secure_url, {
            shouldValidate: true
        })
    };
    
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);

        axios
    }

  return (
    <div>
      setttings modal;
    </div>
  )
}

export default SettingsModal
