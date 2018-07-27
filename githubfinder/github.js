class Github {
    constructor() {

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}