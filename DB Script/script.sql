USE [ShppingDB]
GO
/****** Object:  Table [dbo].[ProductsData]    Script Date: 25-06-21 16:27:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductsData](
	[id] [nchar](10) NOT NULL,
	[productName] [nvarchar](50) NOT NULL,
	[brandName] [nvarchar](50) NOT NULL,
	[weight] [nvarchar](50) NOT NULL,
	[imageUrl] [nvarchar](max) NOT NULL,
	[price] [nvarchar](50) NOT NULL,
	[quantity] [int] NOT NULL,
	[stock] [int] NOT NULL,
	[total] [nchar](10) NOT NULL,
	[inCart] [bit] NOT NULL,
	[description] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllProducts]    Script Date: 25-06-21 16:27:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Arjun Bhaidkar
-- Create date: 12-06-2021
-- Description:	Get All Product Details
-- =============================================
CREATE PROCEDURE [dbo].[sp_GetAllProducts]
AS
BEGIN	
	SET NOCOUNT ON;
	SELECT *
	FROM [dbo].[ProductsData] 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProductUsingId]    Script Date: 25-06-21 16:27:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Arjun Bhaidkar
-- Create date: 12-06-2021
-- Description:	Get Product Details Uding id
-- =============================================
CREATE PROCEDURE [dbo].[sp_GetProductUsingId]
	@id nvarchar(10)
AS
BEGIN	
	SET NOCOUNT ON;
	SELECT *
	FROM [dbo].[ProductsData] 
	WHERE id = @id
END
GO
