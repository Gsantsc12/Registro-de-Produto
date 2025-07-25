# 📦 Registrar Produto – API Pierserv

Este diretório contém os testes automatizados para o endpoint de **registro de produto** na plataforma **Pierserv**, desenvolvidos por **Gabriel Ferreira Santos**.

## 📤 Endpoint

- **Método:** POST
- **Rota:** /registrarProduto

## 📦 Payload Exemplo

```json
{
  "codigo_cliente": "XP123",
  "codigo_fornecedor": "FORNEC001",
  "descricao": "Caixa Organizadora",
  "controle_serie": false,
  "controle_validade": false,
  "controle_imei": false,
  "controle_numero_ativo": false,
  "sigla_cliente": "XP"
}
```

## ✅ Validações
- Status 200
- SKU gerado
- Mensagem de sucesso
