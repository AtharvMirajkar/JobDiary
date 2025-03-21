export const formatDate = (isoString: string): string => {
    return new Date(isoString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  