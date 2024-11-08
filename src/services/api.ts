export const logActivity = async (activity: string) => {
    console.log(`Mock logging activity: ${activity}`);
  };
  
  export const fetchActivityHistory = async () => {
    console.log('Fetching mock activity history');
    return [
      { id: 1, activity: 'Generated tree for Sample Input 1' },
      { id: 2, activity: 'Viewed ASCII tree' },
    ];
  };
  