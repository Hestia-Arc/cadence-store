import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });
  if (error) {
    console.error("Error fetching products:", error);
    return null;
  }
  return data;
}
