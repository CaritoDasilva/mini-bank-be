module.exports = {
    updateUserAccount: (previousCredit, creditToUpdate, isDeposit) => {
        if (!isDeposit && previousCredit - creditToUpdate > 0) {
            return previousCredit - creditToUpdate;
        }
        if (isDeposit) {
            return previousCredit + creditToUpdate
        } else {
            return previousCredit
        }
        // const total = !isDeposit && previousCredit - creditToUpdate > 0  ? previousCredit - creditToUpdate : previousCredit + creditToUpdate;
        // return total;
    },
    // getStoreCredit: (allCredits) => {
    //     let total = 0;
    //     let totalCredits = []
    //     allCredits.map(creditByUser => {
    //         creditByUser.credit.map(credit => {
    //             return totalCredits.push(credit.amount);
    //         })
    //     });
    //     totalCredits.map(storeTotal => total += storeTotal)
    //     return total;


}