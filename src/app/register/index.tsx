import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Register() {

    return (
        <View className="flex-1">
            <View className="w-full items-center py-12">
            <Image 
            source={require('../../assets/Logo2.png')}
            style={{width:200, height:242}}
            />
            </View>

            <View className="w-full pl-11 ">
                <Text className="font-bold text-2xl">Acessar</Text>
            </View>

            <View className="gap-6">
                <View className="w-full">
                    <Text className="text-lg font-medium pb-3 text-neutral-700 pl-11">Nome</Text>
                    <View className=" items-center">
                        <Input title="Coloque seu nome" />

                    </View>
                </View>

                <View className="w-full">
                    <Text className="font-medium text-lg pb-3 text-neutral-700 pl-11">Email</Text>
                    <View className="items-center">
                        <Input title="Coloque seu Email" />
                    </View>
                </View>

                <View className="w-full">
                    <Text className="font-medium text-lg pb-3 text-neutral-700 pl-11">Senha</Text>
                    <View className="items-center">
                        <Input title="Insira sua senha" />
                    </View>
                </View>
            </View>
            <View className="items-center pt-16">
                <Button label="Cadastrar" />
            </View>
        </View>
    )
}