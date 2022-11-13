import './App.css';
import React from 'react';
import Header from "./Header";
import { useForm, useFieldArray } from "react-hook-form";

function CreateQuestion() {
    const { control, register, watch, handleSubmit, formState: { errors } } = useForm();
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "choices"
        }
    );
    const onSubmit = data => console.log(data);

    const type = watch("type");

    return (
        <div className="app">
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Type:
                    <select {...register("type")}>
                        <option value="boolean">Yes or No</option>
                        <option value="multipleChoice">Multiple Choice</option>
                    </select>
                </label>
                <label>Title:
                    <input {...register("title", { required: true })} />
                </label>
                <label>Question:
                    <textarea {...register("question", { required: true })} />
                    {errors.question && <span>This field is required</span>}
                </label>
                {type === "multipleChoice" && (
                    <div>
                        <label>Choice 1:
                            <input {...register("choice1", { required: true })} />
                        </label>
                        <label>Choice 2:
                            <input {...register("choice2", { required: true })} />
                        </label>
                        <ul>
                            {fields.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <input {...register(`choices.${index}.choice`)} />
                                        <button type="button" onClick={() => remove(index)}>
                                            Delete
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                append({ choice: "" });
                            }}
                        >
                            Add Choice
                        </button>
                    </div>
                )}
                <input type="submit" />
            </form>
        </div>
    );
}

export default CreateQuestion;
