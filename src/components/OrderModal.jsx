import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import Pdetails from "../data/Pdetails";
import {
  orderTypes,
  orderModal,
  buildOrderMessage,
} from "../data/Orderdetails";
import { getChannel } from "../data/site";
import SocialButton from "./SocialButton";

const OrderModal = ({ isOpen, onClose, defaultProductIndex = 0 }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(defaultProductIndex);
  const [selectedPack, setSelectedPack] = useState("");
  const [quantity, setQuantity] = useState(orderModal.quantityStep);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState(orderTypes[0].id);

  const [prevDefault, setPrevDefault] = useState(defaultProductIndex);
  if (prevDefault !== defaultProductIndex) {
    setSelectedProductIndex(defaultProductIndex);
    setPrevDefault(defaultProductIndex);
  }

  const currentProduct = Pdetails[selectedProductIndex] || Pdetails[0];

  const effectivePack =
    currentProduct.packSizes?.includes(selectedPack)
      ? selectedPack
      : currentProduct.packSizes?.[0] || "";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const productSelectClass = (idx) =>
    `flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
      selectedProductIndex === idx
        ? "border-brand-red bg-brand-red/5 shadow-sm ring-1 ring-brand-red"
        : "border-black/10 bg-white hover:border-black/25"
    }`;

  const optionClass = (selected) =>
    `rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
      selected
        ? "bg-espresso-800 text-white shadow-sm"
        : "bg-black/5 text-espresso-800 hover:bg-black/10"
    }`;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    const message = buildOrderMessage({
      orderType,
      product: currentProduct.label,
      pack: effectivePack,
      quantity,
      customerName,
      phone,
      notes,
    });

    window.open(
      getChannel("whatsapp").href(encodeURIComponent(message)),
      "_blank"
    );
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-slide-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl p-6 shadow-2xl sm:p-9 text-espresso-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close order modal"
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/5 transition hover:bg-brand-red hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div>
          <span className="pill font-bold bg-brand-red/10 text-brand-red">
            {orderModal.pill}
          </span>
          <h2 id="order-modal-title" className="heading-serif mt-2 text-2xl sm:text-3xl">
            {orderModal.heading}
          </h2>
          <p className="mt-1 text-sm text-espresso-600">
            {orderModal.intro}
          </p>
        </div>

        <form onSubmit={handleWhatsAppOrder} className="mt-6 flex flex-col gap-5">
          {/* Order Type Pills */}
          <div className="flex rounded-2xl bg-black/5 p-1">
            {orderTypes.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setOrderType(id)}
                className={`flex-1 rounded-xl py-2 text-xs font-bold transition ${
                  orderType === id
                    ? "bg-white text-espresso-900 shadow-sm"
                    : "text-espresso-600 hover:text-espresso-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Product Selection */}
          <div>
            <label className="label text-espresso-800/70">
              {orderModal.fieldLabels.product}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Pdetails.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedProductIndex(idx)}
                  className={productSelectClass(idx)}
                >
                  <img
                    src={p.productImage}
                    alt={p.label}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-xs font-bold text-espresso-900">{p.label}</p>
                    <p className="text-[10px] text-espresso-600">{p.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pack Size Selection */}
          {currentProduct.packSizes && (
            <div>
              <label className="label text-espresso-800/70">
                {orderModal.fieldLabels.pack}
              </label>
              <div className="flex flex-wrap gap-2">
                {currentProduct.packSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedPack(size)}
                    className={optionClass(effectivePack === size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="label text-espresso-800/70">
                {orderModal.fieldLabels.quantity}
              </label>
              <div className="flex items-center rounded-xl border border-black/15 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(orderModal.minQuantity, q - orderModal.quantityStep))}
                  className="h-8 w-8 rounded-lg bg-black/5 text-base font-bold transition hover:bg-black/10"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + orderModal.quantityStep)}
                  className="h-8 w-8 rounded-lg bg-black/5 text-base font-bold transition hover:bg-black/10"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="label text-espresso-800/70">
                {orderModal.fieldLabels.name}
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={orderModal.placeholders.name}
                className="field"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="label text-espresso-800/70">
              {orderModal.fieldLabels.phone}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={orderModal.placeholders.phone}
              className="field"
            />
          </div>

          {/* Delivery Note */}
          <div>
            <label className="label text-espresso-800/70">
              {orderModal.fieldLabels.notes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={orderModal.placeholders.notes}
              className="field resize-none"
            />
          </div>

          {/* Order Summary & Submit Button */}
          <div className="mt-2 rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/20">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-900">
              <span>{orderModal.assurance.title}</span>
              <span className="inline-flex items-center gap-1">
                <Zap size={13} />
                {orderModal.assurance.badge}
              </span>
            </div>
          </div>

          <SocialButton
            channel={getChannel("whatsapp")}
            label={orderModal.submitCta}
            onClick={handleWhatsAppOrder}
            className="py-3.5"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderModal;