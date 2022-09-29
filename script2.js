const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}
];
const accounts = [
    {
        clientId: 7,
        bankId: 3,
        balance: 9000
    },
    {
        clientId: 6,
        bankId: 1,
        balance: 15000
    },
    {
        clientId: 1,
        bankId: 3,
        balance: 18000
    },
    {
        clientId: 5,
        bankId: 3,
        balance: 135000
    },
    {
        clientId: 2,
        bankId: 2,
        balance: 5600
    },
    {
        clientId: 3,
        bankId: 1,
        balance: 23000
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 15000
    },
    {
        clientId: 3,
        bankId: 3,
        balance: 45900
    },
    {
        clientId: 2,
        bankId: 3,
        balance: 19000
    },
    {
        clientId: 4,
        bankId: 3,
        balance: 51000
    },
    {
        clientId: 5,
        bankId: 1,
        balance: 89000
    },
    {
        clientId: 1,
        bankId: 2,
        balance: 1600
    },
    {
        clientId: 5,
        bankId: 3,
        balance: 37500
    },
    {
        clientId: 6,
        bankId: 1,
        balance: 19200
    },
    {
        clientId: 2,
        bankId: 3,
        balance: 10000
    },
    {
        clientId: 3,
        bankId: 2,
        balance: 5400
    },
    {
        clientId: 3,
        bankId: 1,
        balance: 9000
    },
    {
        clientId: 4,
        bankId: 3,
        balance: 13500
    },
    {
        clientId: 2,
        bankId: 1,
        balance: 38200
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 17000
    },
    {
        clientId: 1,
        bankId: 3,
        balance: 1000
    },
    {
        clientId: 5,
        bankId: 2,
        balance: 600
    },
    {
        clientId: 6,
        bankId: 1,
        balance: 16200
    },
    {
        clientId: 2,
        bankId: 2,
        balance: 10000
    }
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'CHILE'
},
{
    id: 3,
    name: 'ESTADO'
}
];

/*
  SECCIÓN PROBLEMAS
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
*/

// 0 Arreglo con los ids de clientes

// 0 Arreglo con los ids de clientes
const listClientsIds = clients.map(client => client.id);

//console.log(listClientsIds);

// 1 Arreglo con los ids de clientes ordenados por rut
const ordRut = () => {
    const ordRutAux = clients.sort((a,b) => parseFloat(a.taxNumber) - parseFloat(b.taxNumber)).map(client => client.id)
    return ordRutAux;

}

//console.log(ordRut());

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de
//los saldos de cada cliente en los bancos que participa.

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de 
//los saldos de cada cliente en los bancos que participa.


const sortClientsTotalBalances = () => {
    const bankBalacesSort = clients.map(client => {
        let balancesByCLient = []
        accounts.filter(acc => acc.clientId === client.id && balancesByCLient.push(acc.balance))
        return { [client.name]: balancesByCLient.reduce((a, b) => a + b) };
    })
    return bankBalacesSort.sort((a, b) => Object.values(b) - Object.values(a)).map(nameClient => Object.keys(nameClient)[0]);
}

const orNames = () => {
    const saldoSort = clients.map(client => {
    let saldo = [];
    accounts.filter(cuenta => cuenta.clientId === client.id && saldo.push(cuenta.balance))
    return {[client.name]: cuenta.reduce((a,b) => a+b)}
    })

    return saldoSort.sort((a,b) => Object.values(b)-Object.values(a)).map(names => Object.keys(names)[0]);

}

console.log(orNames())


// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo 
//con los ruts de sus clientes ordenados alfabeticamente por nombre.
const banksClientsTaxNumbers = () => {
    let clientsSort = clients.sort((a, b) => a.name.localeCompare(b.name))
    let bankdByCLient = {}
    banks.map(bank => {
        let clientList = []
        return clientsSort.map(clientBank => {
            let accountsBanks = accounts.filter(b => b.clientId === clientBank.id && bank.id === b.bankId)
            if (accountsBanks.length > 0) {
                clientList.push(clientBank.taxNumber);
            }
            bankdByCLient = { ...bankdByCLient, [bank.name]: clientList }
        })
    })
    return bankdByCLient;
}


// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
const richClientsBalances = () => {
    return accounts.filter(acc => acc.balance > 25000 && acc.bankId === 1)
        .map(bal => bal.balance).sort((a, b) => b - a)
}

// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
const banksRankingByTotalBalance = () => {
    let banks = {}
    accounts.map(acc => {
        banks = { ...banks, [acc.bankId]: banks[acc.bankId] ? banks[acc.bankId] + acc.balance : acc.balance }
    })
    return Object.entries(banks).sort((a, b) => a[1] - b[1]).map(banksIds => banksIds[0]);
}

// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
const banksFidelity = () => {
    let bankdByCLient = {}
    clients.map(client => {
        let count = 0
        banks.map(bank => {
            let haveAccount = accounts.filter(acc => acc.clientId === client.id && acc.bankId === bank.id)
            if (haveAccount.length === 1) {
                bankdByCLient = { ...bankdByCLient, [bank.name]: count++ }
            }
        })
    })
    return bankdByCLient
}

// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
const banksPoorClients = () => {
    let bankdByCLient = {}
    banks.map(bank => {
        let clientBank = {}
        accounts.filter(acc => {
            if (bank.id === acc.bankId) {
                return clientBank = { ...clientBank, [acc.clientId]: !clientBank[acc.clientId] ? acc.balance : clientBank[acc.clientId] + acc.balance }
            }
        })
        let bankBalancesArr = Object.entries(clientBank).sort((a, b) => a[1] - b[1])
        return bankdByCLient = { ...bankdByCLient, [bank.name]: bankBalancesArr[0][0] }
    })
    return bankdByCLient;
}

// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO 
//con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
const newClientRanking = () => {
    return sortClientsTotalBalances().indexOf('Carito Da Silva')
}



