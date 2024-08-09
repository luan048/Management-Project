-- CreateTable
CREATE TABLE "requestsmonth" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "requestsmonth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchasesmonth" (
    "id" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "purchasesmonth_pkey" PRIMARY KEY ("id")
);
