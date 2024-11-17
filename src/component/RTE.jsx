//React Hook Form embraces uncontrolled components and native inputs, however it's hard to avoid working with external controlled component such as React-Select, AntD and MUI.
// This wrapper component will make it easier for you to work with them.

import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

// name-input , control -  yr jimedadar he iis state ko uus form ne le jane ke liye control kay karega ye kya karega iis component se  control pass karega jo uuse bulayega uuske aandar
export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}


{/* ye controller kya karega ki control pass kerege */}
    <Controller
    name={name || "content"}
    control={control}
    // aagar iis field me koi bi change hota he to bata dena render ke time
    render={({field: {onChange}}) => (
        <Editor
        apiKey='goukke9tz378mxsbjw8t9hie72xx15z5i6ztowub05lyfma6'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}