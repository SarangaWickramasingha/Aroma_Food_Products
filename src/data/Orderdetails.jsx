/**
 * `label` renders on the toggle pills; `messageLabel` is what the customer sees
 * in the WhatsApp message. The two are intentionally worded differently.
 */
export const orderTypes = [
  {
    id: "retail",
    label: "Retail / Personal Order",
    messageLabel: "Retail Order",
  },
  {
    id: "wholesale",
    label: "Wholesale / Cafe Inquiries",
    messageLabel: "Wholesale / Distribution",
  },
];

/** Human label for an order type id, used in the WhatsApp message. */
export const orderTypeLabel = (id) =>
  orderTypes.find((t) => t.id === id)?.messageLabel ?? orderTypes[0].messageLabel;

export const orderModal = {
  pill: "Quick Order & Inquiry",
  heading: "Order Aroma Pure Ceylon Products",
  intro:
    "Select your favorite artisan roast or snack for fresh direct delivery or wholesale inquiries.",
  fieldLabels: {
    product: "Select Product",
    pack: "Package Size / Variant",
    quantity: "Quantity",
    name: "Your Name",
    phone: "Phone / WhatsApp Number",
    notes: "Special Instructions / Delivery Location",
  },
  placeholders: {
    name: "e.g. Kasun Fernando",
    phone: "+94 77 123 4567",
    notes: "e.g. Colombo delivery / Wholesale quote for 50kg...",
  },
  assurance: {
    title: "Direct WhatsApp Instant Support",
    badge: "Fast Response",
  },
  submitCta: "Send Order via WhatsApp",
  quantityStep: 1,
  minQuantity: 1,
};

/**
 * Builds the pre-filled WhatsApp order message. Values come from the modal's
 * live form state so the message always reflects what the customer entered.
 */
export const buildOrderMessage = ({
  orderType,
  product,
  pack,
  quantity,
  customerName,
  phone,
  notes,
}) => `Hello Aroma Food Products!
I would like to make an inquiry / order:
- *Type*: ${orderTypeLabel(orderType)}
- *Product*: ${product}
- *Size / Variant*: ${pack}
- *Quantity*: ${quantity}
- *Name*: ${customerName || "Customer"}
- *Phone*: ${phone || "Not provided"}
${notes ? `- *Notes*: ${notes}` : ""}

Please confirm availability and pricing. Thank you!`;
