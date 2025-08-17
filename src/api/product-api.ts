import supabase from "@/services/supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("productV2")
    .select("*")
    .order("id", { ascending: false });
  if (error) {
    console.error("Error fetching products:", error);
    return null;
  }
  return data;
}
