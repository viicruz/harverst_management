import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRouter } from "expo-router";

export default function Login() {

    const navigation = useRouter();

    function handleNavigation() {
        navigation.push("register/");
    }
    return (
        <View className="flex-1">
            <View className="w-full items-center py-12">
            <Image 
            source={require('../../assets/Logo2.png')}
            style={{width:200, height:242}}
            
            />
            </View>

            <View className="w-full pl-11">
                <Text className="font-bold text-xl">Acessar</Text>
            </View>

            <View className="gap-6">
                <View className="w-full">
                    <Text className="text-lg font-medium pb-3 text-neutral-700 pl-11">Email</Text>
                    <View className=" items-center">
                        <Input title="Coloque seu email" />

                    </View>
                </View>
                <View className="w-full">
                    <Text className="font-medium text-lg pb-3 text-neutral-700 pl-11">Senha</Text>
                    <View className="items-center">
                        <Input title="Insira sua senha" />
                    </View>
                    <View className="w-full items-end pr-11 pt-2">
                        <TouchableOpacity>
                            <Text className="text-green-800">Esqueceu a senha?</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
            <View className="items-center pt-16">
                <Button label="Entrar" />
            </View>
            <View className="w-full items-center justify-center pt-5">
                <Text>Não tem uma conta ainda?</Text>
                <TouchableOpacity onPress={handleNavigation}>
                    <Text className="text-green-800">Cadastre-se</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}