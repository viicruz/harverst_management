import { TextInput, View, TextInputProps } from "react-native"

interface Props extends TextInputProps {
    title:string;
}

export function Input({title, ...rest}:Props){
    return(
        <View className="w-96 h-12 border border-emerald-700 rounded-lg items-center justify-center px-4" {...rest}>
            <TextInput className="placeholder:color-neutral-600 w-full" placeholder={title}/>
        </View>
    )
}