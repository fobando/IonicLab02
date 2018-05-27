export interface AtmResponseOperation {
      status : number,
      message: string,
      accountNumber : string,
      currentBalance : number
}

export interface AtmResponseOperationBalance {
    status : number,
    message: string,
    accountNumber : string,
    accountName   : string,
    currentBalance : number
}

export interface AtmTransaction {
    _id            : string,
    accountNumber : string,
    dateOfTransaction : Date,
    transactionType : string,
    amount : number
}

export interface AtmResponseTransactions {
    status        : number,
    message       : string,
    accountNumber : string,
    transactions : Array<AtmTransaction>
}

export interface AtmResponse {
     status : number,
     message : string,
     token   : string
}

