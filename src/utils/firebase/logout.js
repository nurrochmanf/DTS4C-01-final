export const singingOut = async () => {
    try {
      const useClient = await signOut(auth, email, password);
      return {
        error: false,
        data: useClient.user,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
};