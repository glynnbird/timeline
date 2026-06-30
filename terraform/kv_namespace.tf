resource "cloudflare_workers_kv_namespace" "timelinekv" {
  account_id = var.cloudflare_account_id
  title      = "timelinekv-${terraform.workspace}"
}

output "kv_id" {
  value = cloudflare_workers_kv_namespace.timelinekv.id
}
