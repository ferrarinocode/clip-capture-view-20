
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface User {
  name: string;
  email: string;
  whatsapp: string;
  isAdmin: boolean;
}

export const useUsers = () => {
  const [loading, setLoading] = useState(false);

  const addUser = async (userData: User) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('users')
        .insert({
          name: userData.name,
          email: userData.email,
          whatsapp: userData.whatsapp,
          is_admin: userData.isAdmin
        })
        .select()
        .single();

      if (error) throw error;

      return { success: true, user: data };
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading };
};
