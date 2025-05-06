import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hook/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista dos carros de Rally</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite um Carro..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                
                <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
                    <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>
                                <Ionicons name={'trash-bin'} color={'gold'} size={24} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#134761' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { 
        flex: 1, 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 10, 
        borderRadius: 5, 
        marginRight: 10, 
        color: 'black', 
        backgroundColor: 'white'
    },
    botao: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    textoBotao: {
        color: '#134761',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#134761', 
        padding: 4, 
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 5, 
        borderRadius: 5, 
        elevation: 2 
    },
    tarefaTexto: { fontSize: 16, color: 'white' },
    remover: { fontSize: 18, color: 'red' },
});