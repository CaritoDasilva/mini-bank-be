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
    }
}