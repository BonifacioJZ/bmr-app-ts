-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" CHAR(150) NOT NULL,
    "description" CHAR(500),
    "guard_name" CHAR(13) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" CHAR(150) NOT NULL,
    "description" CHAR(500),
    "price" DECIMAL(9,2) NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_guard_name_key" ON "Category"("guard_name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
